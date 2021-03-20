import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StremRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StremRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>maths_oficial</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com ReactJS e React Native.
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StremRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  
  return (
    <List>
      <StreamItem />
    </List>
  );
};

export default StreamList;
