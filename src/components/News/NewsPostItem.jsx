/* eslint-disable react/prop-types */
import { PostNews } from "./style";

function NewsPostItem({ item }) {
  return (
    <PostNews>
      <img src={item.img} alt={item.title} />
      <h4>
        <a href="#">{item.title}</a>
      </h4>
      <p>{item.subtitle}...</p>
    </PostNews>
  );
}

export default NewsPostItem;
