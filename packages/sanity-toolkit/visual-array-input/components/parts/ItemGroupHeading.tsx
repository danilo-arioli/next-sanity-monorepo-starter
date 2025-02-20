import { Flex, Heading, Stack, Text } from '@sanity/ui';
import type { ItemGroup } from '../../types';

export function ItemGroupHeading({
  itemGroup,
  showDescription = true,
}: Readonly<{ itemGroup: ItemGroup; showDescription?: boolean }>) {
  const IconComponent = itemGroup.icon;

  return (
    <Stack space={4}>
      <Flex gap={3} align="center">
        {IconComponent && <IconComponent size={30} />}
        <Heading size={2}>{itemGroup.title}</Heading>
      </Flex>
      {showDescription && itemGroup.description && (
        <Text muted size={1} style={{ maxWidth: '50%' }}>
          {itemGroup.description}
        </Text>
      )}
    </Stack>
  );
}
