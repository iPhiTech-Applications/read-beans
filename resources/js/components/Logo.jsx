import { Container, useComputedColorScheme, Image } from '@mantine/core';
import { IconChartArcs } from '@tabler/icons-react';

export default function Logo(props) {
  const computedColorScheme = useComputedColorScheme();

  const logoSrc =
    computedColorScheme === 'dark'
      ? 'assets/redbean-wordmark/rb-wm-svg-red.svg'
      : 'assets/redbean-wordmark/rb-wm-svg-navy.svg';

  return (
    <Container p={16}>
      <Image
        h={32}
        src={logoSrc}
      />
    </Container>
  );
}
