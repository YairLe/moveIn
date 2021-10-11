import React, { useEffect } from "react";
import Input from "../Input/Input";
import loginLogo from "../../images/LogIn.svg";
import styles from "./Login.module.css";
import Button from "../Button/Button";
import InputAuth from "./InputAuth";
import SignButton from "../Button/SignButton";
import UseAxios from "../../hooks/use-axios";

interface IProps {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = (props: IProps) => {
  const { setLoginPage } = props;

  const { response, loading, fetchData } = UseAxios({
    method: "get",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3R0ZXN0IiwidXNlcklkIjoiNyIsImlhdCI6MTYzMzkzOTQzNiwiZXhwIjoxNjMzOTQzMDM2fQ.wGSEEX1Stqf8rZpMuU0ECiZtkdo7C1Cidz_htLT4ZsY",
    },
  });

  const getAllData = async () => {
    await fetchData();
  };
  useEffect(() => {
    console.log(response, loading);
  }, [loading]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <InputAuth
          setHandleFetch={() => {}}
          setFormValid={() => {}}
          setLoginPage={setLoginPage}
        />
        <div className={styles.loginButtonDiv}>
          <Button
            buttonProp={{
              className: styles.loginButton,
              onClick: () => {
                getAllData();
              },
            }}
          >
            <img src={loginLogo} alt="logo" />
          </Button>
        </div>
        <div className={styles.divh1}>
          <h1 className={styles.h1}>Don't have an account?</h1>
        </div>
        <SignButton
          buttonDivStyle={styles.loginButtonDiv}
          buttonStyle={styles.signButton}
          handleClick={() => {
            setLoginPage(false);
          }}
          h1Style={styles.logh1}
          buttonDisabled={false}
          buttonType="button"
        />
      </div>
    </React.Fragment>
  );
};

export default Login;
