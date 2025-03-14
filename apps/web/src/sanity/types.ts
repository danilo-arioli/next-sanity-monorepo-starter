/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type RecyclingBin = {
  _id: string;
  _type: 'recycling.bin';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  deletedDocLogs?: Array<{
    docId?: string;
    deletedAt?: string;
    type?: string;
    documentTitle?: string;
    _type: 'log';
    _key: string;
  }>;
  deletedDocIds?: Array<string>;
  title?: string;
};

export type Config404 = {
  _id: string;
  _type: 'config.404';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  content?: Array<
    {
      _key: string;
    } & ModularContentBlocksOuterSection
  >;
  pageTitle?: string;
  metaDescription?: string;
  socialImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type Theme = {
  _id: string;
  _type: 'theme';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  activeAnnouncements?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'announcement';
  }>;
};

export type ConfigSeo = {
  _id: string;
  _type: 'config.seo';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteTitle?: string;
  siteUrl?: string;
  withSiteTitle?: 'prepend' | 'append' | 'off';
  titleSeparator?: '|' | '-' | '\u2013' | '\u2014' | '\u2022';
  pageTitle?: string;
  metaDescription?: string;
  socialImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  favicon?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  title?: string;
};

export type ModularContentBlocksInnerRawHtml = {
  _type: 'modularContentBlocks.inner.rawHtml';
  anchorId?: string;
  content?: Code;
};

export type ModularContentBlocksOuterSection = {
  _type: 'modularContentBlocks.outer.section';
  anchorId?: string;
  alignment?: 'left' | 'center' | 'right';
  content?: Array<
    {
      _key: string;
    } & ModularContentBlocksInnerRawHtml
  >;
  mediaType?: 'NONE' | 'IMAGE' | 'VIDEO';
  variant?: 'left' | 'right';
  mediaSize?: 'small' | 'large';
  embeddedVideoUrl?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    caption?: string;
    fit?: 'cover' | 'contain';
    _type: 'image';
  };
};

export type ModularContentBlocksOuter = Array<
  {
    _key: string;
  } & ModularContentBlocksOuterSection
>;

export type ModularContentBlocksInner = Array<
  {
    _key: string;
  } & ModularContentBlocksInnerRawHtml
>;

export type ConfigRedirect = {
  _id: string;
  _type: 'config.redirect';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  redirectNote?: string;
  from?: string;
  link?: {
    linkType?: 'directPage' | 'link';
    page?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'page';
    };
    pageAnchor?: string;
    external?: string;
  };
  isPermanent?: boolean;
  group?: 'redirections' | 'modifiedUrls';
  count?: number;
};

export type Announcement = {
  _id: string;
  _type: 'announcement';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  message?: string;
  startDate?: string;
  endDate?: string;
};

export type Article = {
  _id: string;
  _type: 'article';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pageVisibility?: 'public' | 'hidden';
  pathname?: Slug;
  publishedAt?: string;
  updatedAt?: string;
  readingTime?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    caption?: string;
    fit?: 'cover' | 'contain';
    _type: 'image';
  };
  excerpt?: string;
  content?: ModularContentBlocksOuter;
  pageTitle?: string;
  metaDescription?: string;
  socialImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type Page = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pageVisibility?: 'public' | 'hidden';
  pathname?: Slug;
  content?: ModularContentBlocksOuter;
  pageTitle?: string;
  metaDescription?: string;
  socialImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Code = {
  _type: 'code';
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type Note = string;

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | RecyclingBin
  | Config404
  | Theme
  | ConfigSeo
  | ModularContentBlocksInnerRawHtml
  | ModularContentBlocksOuterSection
  | ModularContentBlocksOuter
  | ModularContentBlocksInner
  | ConfigRedirect
  | Announcement
  | Article
  | Page
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug
  | Code
  | Note;
export declare const internalGroqTypeReferenceTo: unique symbol;
