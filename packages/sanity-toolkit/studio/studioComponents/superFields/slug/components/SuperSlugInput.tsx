// See: https://github.com/sanity-io/sanity/blob/next/packages/sanity/src/core/form/inputs/Slug/SlugInput.tsx
// Customised specifically at time of this commit: https://github.com/sanity-io/sanity/blob/d157fca17d146886413f86577258fb24ee35e3d2/packages/sanity/src/core/form/inputs/Slug/SlugInput.tsx

import type { ComponentType } from 'react';
import type { SuperSlugInputProps } from '../types';
import styles from './styles.module.css';
import { SuperSlug } from './index';
import { Box, Card, Flex, Stack } from '@sanity/ui';
import { useSuperSlugField } from '../hooks/useSuperSlugField';
import { useSlugGenerator } from '../hooks/useSlugGenerator';
import { useSlugPrefix } from '../hooks/useSlugPrefix';

/** @todo support users adding further jsx to component, such as more buttons, etc., and other customisations */

export function makeSuperSlugInput({ apiVersion }: { apiVersion: string }) {
  const SuperSlugInput: ComponentType<SuperSlugInputProps> = (props) => {
    const { path, readOnly, value, schemaType } = props;
    const { source: sourceField, hideGenerate = false } = schemaType.options ?? {};

    const { prefix } = useSlugPrefix({ ...props, apiVersion });

    const fullPathname = `${prefix}${value?.current ?? ''}`;

    const superSlugField = useSuperSlugField({ ...props, apiVersion });

    const { generateSlugState, handleGenerateSlug, isGenerating } = useSlugGenerator({
      apiVersion,
      sourceField,
      schemaType,
      path,
      folderSlug: superSlugField.folderSlug,
      updateSlug: superSlugField.updateSlug,
    });

    return (
      <Stack space={3}>
        <Flex gap={1}>
          <Box flex={1}>
            <SuperSlug.PathInput
              {...props}
              apiVersion={apiVersion}
              disabled={isGenerating}
              folderSlug={superSlugField.folderSlug}
              slug={superSlugField.slug}
              onChange={superSlugField.updateSlug}
            />

            {generateSlugState?.status === 'error' && (
              <Card padding={2} tone="critical">
                {generateSlugState.error.message}
              </Card>
            )}
          </Box>

          {!hideGenerate && sourceField && (
            <SuperSlug.GenerateButton
              isGenerating={isGenerating}
              readOnly={!!readOnly}
              onClick={handleGenerateSlug}
            />
          )}
        </Flex>

        <div className={styles.superSlugInput__preview}>
          <SuperSlug.FullUrlPreview fullPathname={fullPathname} />
        </div>
      </Stack>
    );
  };

  return SuperSlugInput;
}
