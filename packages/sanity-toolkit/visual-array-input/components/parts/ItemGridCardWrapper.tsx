import { Card, Text, Flex } from '@sanity/ui';
import styled from 'styled-components';
import { useColorSchemeValue } from 'sanity';
import type { Item } from '../../types';
import type { PropsWithChildren } from 'react';

interface Props {
  item: Item;
}

const StyledItemGridCardWrapper = styled(Card)<{ $currentScheme?: 'light' | 'dark' }>`
  --hover-bg: ${(props) => (props.$currentScheme === 'light' ? '#f6f6f8' : '#1b1d27')};

  all: initial;
  border-radius: 0.1875rem;
  border: 1px solid var(--card-border-color);

  &:hover {
    background: var(--hover-bg);
    cursor: pointer;
  }
`;

export function ItemGridCardWrapper({
  children,
  onClick,
  ...props
}: Readonly<PropsWithChildren<{ onClick: () => unknown }>>) {
  const scheme = useColorSchemeValue();

  return (
    <StyledItemGridCardWrapper
      {...props}
      role="button"
      tone="transparent"
      padding={2}
      radius={2}
      style={{ position: 'relative' }}
      onClick={onClick}
      $currentScheme={scheme}
    >
      {children}
    </StyledItemGridCardWrapper>
  );
}
