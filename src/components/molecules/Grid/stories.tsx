import React, { FC } from 'react';

import { colors } from '../../../core';
import { Container } from '../../atoms/Container';
import { Divider } from '../../atoms/Divider';
import { Heading } from '../../atoms/Heading';
import { Paragraph } from '../../atoms/Paragraph';
import { Card } from '../Card';
import { Grid } from './component';
import { Item } from './libs/Item';

export default {
  title: 'Molecules/Grid',
};

export const GridBasic: FC = () => (
  <>
    <Container>
      <Heading as="h1" className="mb-3 mt-5">
        Grid
      </Heading>
      <Divider />
      <Heading as="h2" className="mb-3 mt-3">
        2 columns
      </Heading>
      <Grid className="mb-4" columns={2} gap="10px">
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            1st block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            2nd block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            3rd block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            4th block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
      </Grid>

      <Heading as="h2" className="mb-3 mt-5">
        3 columns
      </Heading>
      <Grid className="mb-4" columns={3} gap="10px">
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            1st block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            2nd block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            3rd block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            4th block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            5th block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
        <Card
          className="p-4"
          disableBorder
          background={colors.Background.Secondary}
          color={colors.Text.Light}
        >
          <Heading className="mb-2" as="h3">
            6th block
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Card>
      </Grid>
    </Container>
  </>
);

export const GridFeed: FC = () => (
  <>
    <Container>
      <Heading as="h1" className="mb-3 mt-5">
        Grid feed template
      </Heading>
      <Grid className="mb-4" columns={12} gap="10px">
        <Item columns={12}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              1st block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={3}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              2nd block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={3}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              3rd block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={3}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              4th block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={4}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              5th block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={4}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              6th block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={4}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              7th block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
        <Item columns={12} rowColumns={4}>
          <Card
            className="p-4"
            disableBorder
            background={colors.Background.Secondary}
            color={colors.Text.Light}
          >
            <Heading className="mb-2" as="h3">
              8th block
            </Heading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Card>
        </Item>
      </Grid>
    </Container>
  </>
);
