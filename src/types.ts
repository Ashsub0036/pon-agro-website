/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'ta';

export interface Product {
  id: string;
  nameEn: string;
  nameTa: string;
  category: string;
  price: string;
  descEn: string;
  descTa: string;
  specsEn: string[];
  specsTa: string[];
  image: string;
  isAvailable: boolean;
  badgeEn?: string;
  badgeTa?: string;
  modelCode: string;
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameTa: string;
  villageEn: string;
  villageTa: string;
  productEn: string;
  productTa: string;
  feedbackEn: string;
  feedbackTa: string;
  rating: number;
}

export interface YouTubeVideo {
  id: string;
  titleEn: string;
  titleTa: string;
  youtubeId: string;
  duration: string;
  isPopular?: boolean;
}

export interface Stat {
  id: string;
  count: number;
  suffix: string;
  labelEn: string;
  labelTa: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleTa: string;
  categoryEn: string;
  categoryTa: string;
  image: string;
}
