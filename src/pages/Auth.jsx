import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "white",
          padding: "45px",
          borderRadius: "8px",
          boxSizing: "border-box",
          boxShadow: "0 10px 40px dimgray",
        }}
      >
        {/* Brand */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "black",
              fontSize: "28px",
              letterSpacing: "4px",
              margin: "0 0 8px",
            }}
          >
            AUREVIA
          </h1>

          <p
            style={{
              color: "dimgray",
              fontSize: "13px",
              margin: 0,
            }}
          >
            {isLogin
              ? "Welcome back to Aurevia"
              : "Create your Aurevia account"}
          </p>
        </div>

        {/* Title */}
        <h2
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "30px",
          }}
        >
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {/* Name */}
        {!isLogin && (
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                color: "black",
                fontSize: "14px",
                marginBottom: "7px",
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              color: "black",
              fontSize: "14px",
              marginBottom: "7px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              color: "black",
              fontSize: "14px",
              marginBottom: "7px",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
          />
        </div>

        {/* Main Button */}
        <button
          style={{
            width: "100%",
            backgroundColor: "gold",
            color: "black",
            border: "none",
            padding: "13px",
            borderRadius: "4px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "lightgray",
            }}
          />

          <span
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            OR
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "lightgray",
            }}
          />
        </div>

        {/* OAuth Button */}
        <button
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            border: "1px solid darkgray",
            padding: "12px",
            borderRadius: "4px",
            fontSize: "14px",
            cursor: "pointer",
            marginBottom: "25px",
          }}
        >
          Continue with Google
        </button>

        {/* Switch Login / Sign Up */}
        <p
          style={{
            textAlign: "center",
            color: "dimgray",
            fontSize: "14px",
            margin: 0,
          }}
        >
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "darkgoldenrod",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid lightgray",
  borderRadius: "4px",
  boxSizing: "border-box",
  fontSize: "14px",
  outline: "none",
};

export default Auth;