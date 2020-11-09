import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';

const Dropdown = ({
  title,
  isInputExist,
  options,
  toggleDropdown,
  defaultSelect,
  onChange,
  width,
  marginTop,
}) => {
  const wrapper = useRef(undefined);
  const [selected, setSelected] = useState(defaultSelect);

  useEffect(() => {
    const clickOutside = (e) => {
      if (!wrapper.current?.contains(e.target) && !e.target.closest('svg')) toggleDropdown();
    };
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
      onChange(selected);
    };
  }, [selected]);

  const onClick = (id) => {
    if (!selected.includes(id)) setSelected([...selected, id]);
    else
      setSelected(
        selected.reduce((acc, prevId) => {
          if (prevId !== id) acc.push(prevId);
          return acc;
        }, []),
      );
  };

  return (
    <DropdownWrapper ref={wrapper} width={width} marginTop={marginTop}>
      <Header>
        <Title>{title}</Title>
        <RiCloseLine onClick={toggleDropdown} />
      </Header>
      {isInputExist && (
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      )}
      <OptionsWrapper>
        {options.map(({ id, div }) => (
          <Option
            key={id}
            onClick={() => {
              onClick(id);
            }}
          >
            <OptionContent>{div}</OptionContent>
          </Option>
        ))}
      </OptionsWrapper>
    </DropdownWrapper>
  );
};

const boxFade = keyframes`
  0% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  width: ${(props) => props.width || '280px'};
  margin-top: ${(props) => props.marginTop};
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 3px gray;
  z-index: 2;
  animation: ${boxFade} 0.2s;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
  svg {
    color: ${({ theme }) => theme.color.iconColor};
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
`;

const Search = styled.input`
  width: 95%;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  border-radius: 5px;
  &:focus {
    box-shadow: 0 0 2px ${({ theme }) => theme.color.blueColor};
  }
`;

const OptionsWrapper = styled.div`
  max-height: 350px;
  overflow-y: auto;
`;

const Option = styled.div`
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  border-top: 1px solid ${({ theme }) => theme.color.borderColor};
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverBgColor};
    cursor: pointer;
  }
`;

const OptionContent = styled.div`
  padding: 8px 15px;
`;

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  isInputExist: PropTypes.bool,
  options: PropTypes.array,
  toggleDropdown: PropTypes.func.isRequired,
  defaultSelect: PropTypes.array,
  onChange: PropTypes.func,
  width: PropTypes.string,
  marginTop: PropTypes.string,
};

Dropdown.defaultProps = {
  isInputExist: true,
  options: [],
  defaultSelect: [],
  onChange: () => {},
  width: undefined,
  marginTop: '0px',
};

export default Dropdown;
