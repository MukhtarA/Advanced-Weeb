import { pipe } from 'fp-ts/pipeable';
import React, { FC, useState } from 'react';

import { Container } from '../../atoms/Container';
import { Paragraph } from '../../atoms/Paragraph';
import { Card } from '../Card';
import { Pagination } from './component';

export default {
  title: 'molecules/Pagination',
};

export const Basic: FC = () => {
  const [active, setActive] = useState(4);

  function handleClick(path: string): void {
    pipe(
      path,
      () => path.split('/'),
      (pathArr) => pathArr[pathArr.length - 1],
      (idStr) => Number(idStr),
      (id) => setActive(id),
    );
  }

  return (
    <>
      <Container>
        <h1>Pagination</h1>
        <Card className="p-3 mb-2">
          <Paragraph>
            Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной &quot;рыбой&quot; для текстов на латинице с начала XVI
            века. В то время некий безымянный печатник создал большую коллекцию размеров и форм
            шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
            пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его
            популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum
            в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
            PageMaker, в шаблонах которых используется Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card className="p-3 mb-2">
          <Paragraph>
            Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной &quot;рыбой&quot; для текстов на латинице с начала XVI
            века. В то время некий безымянный печатник создал большую коллекцию размеров и форм
            шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
            пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его
            популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum
            в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
            PageMaker, в шаблонах которых используется Lorem Ipsum.
          </Paragraph>
        </Card>
        <Pagination
          basePath="/users"
          perPage={5}
          count={30}
          onClick={handleClick}
          active={active}
        />
      </Container>
    </>
  );
};

export const MuchPages: FC = () => {
  const [active, setActive] = useState<number>();

  function handleClick(path: string): void {
    pipe(
      path,
      () => path.split('/'),
      (pathArr) => pathArr[pathArr.length - 1],
      (idStr) => Number(idStr),
      (id) => setActive(id),
    );
  }

  return (
    <>
      <Container>
        <h1>Pagination</h1>
        <Card className="p-3 mb-2">
          <Paragraph>
            Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной &quot;рыбой&quot; для текстов на латинице с начала XVI
            века. В то время некий безымянный печатник создал большую коллекцию размеров и форм
            шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
            пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его
            популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum
            в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
            PageMaker, в шаблонах которых используется Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card className="p-3 mb-2">
          <Paragraph>
            Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной &quot;рыбой&quot; для текстов на латинице с начала XVI
            века. В то время некий безымянный печатник создал большую коллекцию размеров и форм
            шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
            пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его
            популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum
            в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
            PageMaker, в шаблонах которых используется Lorem Ipsum.
          </Paragraph>
        </Card>
        <Pagination
          basePath="/books"
          perPage={5}
          count={200}
          onClick={handleClick}
          active={active}
        />
      </Container>
    </>
  );
};
