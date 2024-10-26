/* eslint-disable react/prop-types */
import styled from "styled-components";

const PageTitleContainer = styled.div`
  margin-bottom: 10px;

  h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 600;
    color: #012970;
  }
`;

function PageTitle({ page }) {
  return (
    <PageTitleContainer className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </PageTitleContainer>
  );
}

export default PageTitle;
