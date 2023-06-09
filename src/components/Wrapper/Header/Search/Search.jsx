import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { IoCartOutline } from 'react-icons/io5';
import {
  ButtonStyled,
  Container,
  FormStyled,
  InputStyled,
  CartContainer,
  LinkStyled,
  CartCount,
  LogoContainer,
  IconContainer,
} from './SearchStyled';
import logo from '../../../../../public/images/logo 1.png';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/products/selectors';

const Search = () => {
  const [quantity, setQuantity] = useState(0);
  const cartProducts = useSelector(selectCart);
  useEffect(() => {
    setQuantity(cartProducts.length);
  }, [cartProducts.length]);

  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Container>
      <LogoContainer>
        <Image
          src={logo}
          alt="logo"
        />
      </LogoContainer>
      <FormStyled onSubmit={handlerSubmit}>
        <InputStyled
          type="text"
          placeholder="Я шукаю..."
        />
        <ButtonStyled type="submit">Знайти</ButtonStyled>
      </FormStyled>
      <CartContainer>
        <LinkStyled href={'/cart'}>
          <IconContainer>
            <IoCartOutline />
            <CartCount quantity={quantity}>{quantity}</CartCount>
          </IconContainer>
          <p>Корзина</p>
        </LinkStyled>
      </CartContainer>
    </Container>
  );
};

export default Search;
