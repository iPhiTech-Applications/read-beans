import { Affix, HoverCard, rem, Text } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconMessage } from '@tabler/icons-react';

export default function SecretLlamaButton() {
  return (
    <Affix position={{ bottom: 32, right: 64 }}>
      <HoverCard>
        <HoverCard.Target>
          <Button
            size='md'
            color='blue'
            variant='light'
            style={{ width: rem(64), height: rem(64), padding: rem(0) }}
            radius='xl'
          >
            <IconMessage
              style={{ width: rem(32), height: rem(32) }}
              stroke={2}
            />
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size='sm'>Chat with SecretLlama</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Affix>
  );
}
