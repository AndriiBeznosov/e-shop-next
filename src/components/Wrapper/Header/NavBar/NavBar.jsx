import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../../../redux/products/selectors';
import MenuCategories from './MenuCategories/MenuCategories';
import navigation from '../../../../../public/bd/navigation.json';

import { ButtonCategories, Container, ListContainer, ItemContainer, LinkStyled } from './NavBarStyled';

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [nameButton, setNameButton] = useState(null);

  const router = useRouter();
  const path = router.asPath;

  const data = useSelector(selectCategories);
  const localCategories = typeof window !== 'undefined' ? window.localStorage.getItem('categories') : false;

  const categories = data.length ? data : JSON.parse(localCategories) ?? [];

  const handleClick = (e) => {
    if (!e) {
      setShowCategories((prev) => !prev);
      return;
    }
    const btn = e.target.name;

    if (!btn || !e) {
      setShowCategories((prev) => !prev);
      return;
    }

    if (showCategories && btn !== nameButton) return;
    setNameButton(btn);
    setShowCategories((prev) => !prev);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Container>
          <ButtonCategories
            name="Categories"
            type="button"
            onClick={handleClick}
          >
            Каталог товарів
          </ButtonCategories>
          <ButtonCategories
            name="Menu"
            type="button"
            onClick={handleClick}
          >
            Меню
          </ButtonCategories>
          <ListContainer>
            {navigation.map((item) => {
              const query = item.path === '/products' ? 'category=all' : '';
              return (
                <ItemContainer key={item.id}>
                  <LinkStyled
                    href={{ pathname: item.path, query }}
                    path={path}
                  >
                    {item.category}
                  </LinkStyled>
                </ItemContainer>
              );
            })}
          </ListContainer>
        </Container>
        {showCategories && (
          <MenuCategories
            handleClick={handleClick}
            data={nameButton === 'Menu' ? navigation : categories}
            nameButton={nameButton}
          />
        )}
      </div>
    </>
  );
};

export default NavBar;
