import { PreviewProps } from '@/types/props';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export const CategoryComponents: Record<string, ComponentType<PreviewProps>> = {
  1: dynamic(() => import('@/collections/headers/header1')),
  3: dynamic(() => import('@/collections/tabs/tab1')),
  4: dynamic(() => import('@/collections/tabs/tab2')),
  5: dynamic(() => import('@/collections/tabs/tab3')),
};
