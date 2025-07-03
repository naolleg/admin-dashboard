import { LoginForm } from "../componet/LoginForm";

function LoginPage() {
    return (
        <div
            style={{
                backgroundColor: "#f3f4f6", // Light gray
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <LoginForm />
        </div>
    );
}

export default LoginPage;
