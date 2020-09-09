import React, { FC, useState } from 'react';

import { Button } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { Paragraph } from '../../atoms/Paragraph';
import { Card } from '../Card';
import { ExpandableCard } from './component';

export default {
  title: 'molecules/ExpandableCard',
};

export const Basic: FC = () => (
  <>
    <Container mini>
      <ExpandableCard
        className="p-4"
        moreButton="More"
        collapsedChildren={
          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
            Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC...
          </Paragraph>
        }
      >
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
          Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
          &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
          comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Paragraph>
      </ExpandableCard>
    </Container>
  </>
);

export const nonExpandable: FC = () => (
  <>
    <Container mini>
      <ExpandableCard className="p-4" moreButton="More" nonExpandable>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
          Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 translation by H. Rackham. Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
          &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
          comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
          Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Paragraph>
      </ExpandableCard>
    </Container>
  </>
);

export const NodeMoreButton: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toggleClicked = (): void => setIsClicked(!isClicked);
  return (
    <>
      <Container mini>
        <ExpandableCard
          className="p-4"
          moreButton={<Button onClick={toggleClicked}>More...</Button>}
          collapsedChildren={
            <Paragraph>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus
              Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45
              BC...
            </Paragraph>
          }
        >
          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
            Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is
            a treatise on the theory of ethics, very popular during the Renaissance. The first line
            of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
            Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham. Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem
            ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
            reproduced in their exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Paragraph>
        </ExpandableCard>
        <Card className="p-3 mt-2">
          This line shows whether button was clicked, or not. Clicked:{' '}
          <mark>{isClicked.toString()}</mark>
        </Card>
      </Container>
    </>
  );
};
