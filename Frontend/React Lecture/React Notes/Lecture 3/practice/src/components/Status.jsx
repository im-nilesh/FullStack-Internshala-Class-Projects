export default function Status({ isStatus }) {
  if (isStatus) {
    return <h1>User is Online</h1>;
  } else {
    return <h1>User is Offline</h1>;
  }
}
