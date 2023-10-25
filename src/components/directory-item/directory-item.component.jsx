import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyStyle,
} from "./directory-item.styles";

import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyStyle>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyStyle>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
