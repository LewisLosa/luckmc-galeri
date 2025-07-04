import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Hata meydana geldi, geliştiriciye bildirir misin :) Hata:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Üzgünüz.. bir hata meydana geldi</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;