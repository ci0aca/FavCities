//app/components/CentredBox.js
export default function CenteredBox({ children }) {
  return (
    <div style={styles.container}>
      <div style={styles.box}>{children}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // fundalul general (opțional)
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366', // albastru închis
    color: 'white',
    padding: '40px', // mai mult spațiu în interior
    border: '2px solid black', // border negru
    borderRadius: '0px', // colțuri pătrate
    textAlign: 'center',
    width: '500px', // lățime mai mare
    height: '300px', // înălțime mai mare
  },
};