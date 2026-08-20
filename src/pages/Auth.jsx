import { useState } from "react";
import { myDatabase } from "../supabase/supabaseClient";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await myDatabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setMessage(error.message);
        } else {
          setMessage("Login successful!");
        }
      } else {
        const { error } = await myDatabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });

        if (error) {
          setMessage(error.message);
        } else {
          setMessage(
            "Account created successfully! Please check your email if confirmation is required."
          );
        }
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setMessage("");

    const { error } = await myDatabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setMessage(error.message);
    }
  };

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

        <form onSubmit={handleSubmit}>
          {/* Name */}
          {!isLogin && (
            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>Full Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={inputStyle}
                required
              />
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: "18px" }}>
            <label style={labelStyle}>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={inputStyle}
              required
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
              required
            />
          </div>

          {/* Message */}
          {message && (
            <p
              style={{
                color: message.includes("successful") ||
                  message.includes("created")
                  ? "green"
                  : "firebrick",
                fontSize: "13px",
                lineHeight: "1.5",
                marginBottom: "18px",
              }}
            >
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: loading ? "darkgray" : "gold",
              color: "black",
              border: "none",
              padding: "13px",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "20px",
            }}
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

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

        {/* Google OAuth */}
        <button
          type="button"
          onClick={handleGoogleLogin}
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

        {/* Switch */}
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
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
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

const labelStyle = {
  display: "block",
  color: "black",
  fontSize: "14px",
  marginBottom: "7px",
};

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