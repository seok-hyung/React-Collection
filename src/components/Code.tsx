// Code.tsx
'use client';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface CodeProps {
  codeString: string;
  language?: string;
  theme?: string;
}

/**
 * 코드 컴포넌트
 * @param {string} codeString - 보여줄 코드
 * @param {string} language - 원하는 언어 선택 / default - 'tsx'
 * @param {string} theme - 원하는 테마 / default -'github-dark'
 *
 * @example
 * <Code codeString={codeString} language='tsx' theme='material-theme' />
 */
export default function Code({
  codeString,
  language = 'tsx',
  theme = 'github-dark',
}: CodeProps) {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    const loadHighlighter = async () => {
      const html = await codeToHtml(codeString, {
        lang: language, // 원하는 언어 선택 가능
        theme: theme, // 원하는 테마로 변경 가능
      });
      setHighlightedCode(html);
    };

    loadHighlighter();
  }, [codeString, language, theme]);

  return (
    <div
      className='w-full h-full overflow-auto rounded-lg'
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
