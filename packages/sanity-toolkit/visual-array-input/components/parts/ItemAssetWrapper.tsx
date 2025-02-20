import { useEffect, type ElementType } from 'react';
import styled from 'styled-components';
import { CiBoxList } from 'react-icons/ci';
import { Box, Flex, Heading, Stack, useTheme, Text } from '@sanity/ui';

const StyledItemAssetWrapper = styled.div`
  border-bottom: 1px solid var(--card-border-color);
  min-height: 100px;
  max-height: 400px;
  height: 100%;
  width: 100%;

  & img,
  video {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: top left;
    overflow: hidden;
  }
`;

export function ItemAssetWrapper({
  assetUrl,
  icon,
  title,
}: Readonly<{ assetUrl?: string; icon?: ElementType; title: string }>) {
  const theme = useTheme();
  const isDarkMode = theme?.sanity?.v2?.color?._dark;

  const FinalIcon = icon ?? CiBoxList;

  return (
    <Stack>
      <StyledItemAssetWrapper>
        {assetUrl &&
          (/\.mp4$|\.mov$|\.avi$|\.wmv$|\.flv$|\.mkv$/.test(assetUrl) ? (
            <video muted={true} loop={true} autoPlay={true} src={assetUrl} />
          ) : (
            <img src={assetUrl} alt="" />
          ))}
        {!assetUrl && (
          <Flex align="center" justify="center" style={{ height: '100%' }}>
            <FinalIcon style={{ color: isDarkMode ? '#e3e4e8' : '#13141b' }} size={28} />
          </Flex>
        )}
      </StyledItemAssetWrapper>
      <Box paddingY={4} paddingX={4}>
        <Text weight="medium" align="center">
          {title}
        </Text>
      </Box>
    </Stack>
  );
}
