import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px 0;
  font-size: 14px;
  transition: all 0.3s;
  border-top: 1px solid #cddfff;
`;

const Copyright = styled.div`
  text-align: center;
  color: #012970;
`;

const Credits = styled.div`
  padding-top: 5px;
  text-align: center;
  font-size: 13px;
  color: #012970;
`;

function Footer() {
  return (
    <FooterContainer id="footer">
      <Copyright>
        &copy; Copyright{""}{" "}
        <strong>
          <span>D.H</span>
        </strong>
        . Todos os direitos reservados
      </Copyright>
      <Credits>
        Criado por <a href="#">Deividson Henry</a>
      </Credits>
    </FooterContainer>
  );
}

export default Footer;
