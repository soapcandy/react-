import { NavLink } from "react-router-dom";
import styled from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

//NavLink는 Link와 비슷하나 현재 활성화된 링크를 표시 할 수 있는 추가 기능이 있음
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre; //줄바꿈 방지
  text-decoration: none; // 밑줄 제거
  color: inherit; // 색상 부모로부터  상속
  padding-bottom: 0.25rem;

  &:hover {
    // 마우스를 올렸을 때
    color: #495057;
  }

  &.active {
    // 활성화 된 링크 속성
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    // Category 컴포넌트가 연속적으로 나올 때 두 컴포넌트 사이에 margin 값 적용
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name} // 고유 키값
          activeClassName="active" // 선택한 카테고리에 active 클래스 적용
          exact={c.name === "all"} // 카테고리 이름이 all 이면 exact 값이 true로 변경 exact 값이 true면 url 값이 정확하게 일치할때만 active 클래스 적용
          to={c.name === "all" ? "/" : `/${c.name}`} // 카테고리가 all 이면 루트로 이동 그 외에는 해당 경로로 이동
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
