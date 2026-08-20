import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myDatabase } from "../supabase";

function Auth() {
  const navigate = useNavigate();

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
        // LOGIN
        const { error } = await myDatabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setMessage(error.message);
        } else {
          setMessage("Login successful!");

          setTimeout(() => {
            navigate("/");
          }, 800);
        }
      } else {
        // SIGN UP
        const { error } = await myDatabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: name.trim(),
            },
          },
        });

        if (error) {
          setMessage(error.message);
        } else {
          setMessage(
            "Account created successfully! Please check your email if confirmation is required."
          );

          setName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin((current) => !current);
    setMessage("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, black, midnightblue, darkslategray)",
        color: "ivory",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Auth Card */}

      <div
        style={{
          width: "100%",
          maxWidth: "470px",
          background:
            "linear-gradient(145deg, ivory, lavender, whitesmoke)",
          padding: "clamp(25px, 6vw, 48px)",
          boxSizing: "border-box",
          borderRadius: "24px",
          boxShadow: "0 25px 70px black",
          border: "1px solid lightsteelblue",
        }}
      >
        {/* Brand */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "midnightblue",
              fontSize: "clamp(24px, 6vw, 30px)",
              fontWeight: "700",
              letterSpacing: "5px",
              textDecoration: "none",
            }}
          >
            AUREVIA
          </Link>

          <p
            style={{
              color: "slateblue",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              margin: "9px 0 0",
            }}
          >
            The Art of Time
          </p>
        </div>

        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <h1
            style={{
              color: "midnightblue",
              fontSize: "clamp(25px, 6vw, 32px)",
              margin: "0 0 10px",
              lineHeight: "1.2",
              fontWeight: "700",
            }}
          >
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h1>

          <div
            style={{
              width: "50px",
              height: "3px",
              background:
                "linear-gradient(90deg, midnightblue, mediumpurple)",
              margin: "0 auto 15px",
              borderRadius: "5px",
            }}
          />

          <p
            style={{
              color: "dimgray",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {isLogin
              ? "Sign in to continue your Aurevia experience."
              : "Join Aurevia and discover timeless timepieces."}
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>
          {/* Full Name - Sign Up Only */}

          {!isLogin && (
            <div style={fieldStyle}>
              <label style={labelStyle}>Full Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                style={inputStyle}
                required
              />
            </div>
          )}

          {/* Email */}

          <div style={fieldStyle}>
            <label style={labelStyle}>Email Address</label>

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

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label style={labelStyle}>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
              minLength={6}
              required
            />
          </div>

          {/* Message */}

          {message && (
            <div
              style={{
                backgroundColor:
                  message.includes("successful") ||
                  message.includes("created")
                    ? "honeydew"
                    : "mistyrose",
                borderLeft:
                  message.includes("successful") ||
                  message.includes("created")
                    ? "3px solid seagreen"
                    : "3px solid firebrick",
                padding: "11px 13px",
                marginBottom: "18px",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  color:
                    message.includes("successful") ||
                    message.includes("created")
                      ? "seagreen"
                      : "firebrick",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {message}
              </p>
            </div>
          )}

          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading
                ? "slategray"
                : "linear-gradient(135deg, midnightblue, mediumpurple)",
              color: "ivory",
              border: "1px solid slateblue",
              padding: "14px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: loading ? "not-allowed" : "pointer",
              marginBottom: "22px",
              boxShadow: "0 8px 20px lightsteelblue",
            }}
          >
            {loading
              ? "Please Wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        {/* Switch Login / Sign Up */}

        <p
          style={{
            textAlign: "center",
            color: "dimgray",
            fontSize: "13px",
            margin: 0,
          }}
        >
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={switchMode}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "slateblue",
              fontWeight: "700",
              cursor: "pointer",
              marginLeft: "5px",
              padding: 0,
              fontSize: "13px",
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}

const fieldStyle = {
  marginBottom: "18px",
};

const labelStyle = {
  display: "block",
  color: "midnightblue",
  fontSize: "13px",
  fontWeight: "700",
  marginBottom: "7px",
};

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid lightsteelblue",
  borderRadius: "10px",
  boxSizing: "border-box",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "white",
  color: "midnightblue",
};

export default Auth;