class EmailData {

  constructor(user,subject){
    this.from = "Twist & Shout Bar"
    this.to = user.email
    this.subject = subject
    this.html = this.setHtml(user,subject)
  }

  setHtml(user,subject){
    if(subject=="Confirmación de reserva"){
      return `<h1>¡Buenas ${user.name}!</h1>
      <img src="https://pbs.twimg.com/profile_images/474300520186646528/j-f-A7kr.jpeg" alt="Logo">
      <h2>Confirma tu reserva pulsando en el botón</h2>
      <a href="http://localhost:3000/citas/reservado/${user.id}" target="_blank">Confirmar reserva</a>
      <style>
      body{
        padding: 25px 0;
        font-family: Arial;
        text-align: center;
        background-color: black;
        color: white;
      }
      img{
        width:250px;
      }
      a{
        font-size: 1.8em;
        text-decoration: none;
        color: white;
        padding: 10px;
        margin: 15px;
        color: $White;
        border: 2px solid white;
        border-radius: 25px;
        height: 30px;
        box-shadow: 4px 4px 2px #444;
        background-color:#A80000;
      }
    </style>`
    }
    if(subject=="Resguardo de reserva"){
      return `<h1>¡Buenas ${user.name}!</h1>
      <img src="https://pbs.twimg.com/profile_images/474300520186646528/j-f-A7kr.jpeg" alt="Logo">
      <h2>Tu reserva ha sido confirmada. Te esperamos el día ${user.date} a las ${user.hour}</h2>
      <h2>Para acceder al código QR de tu reserva pulsa en el botón</h2>
      <a href="http://localhost:3000/citas/reservado/${user.id}" target="_blank">Consultar reserva</a>
      <style>
      body{
        padding: 25px 0;
        font-family: Arial;
        text-align: center;
        background-color: black;
        color: white;
      }
      img{
        width:250px;
      }
      a{
        font-size: 1.8em;
        text-decoration: none;
        color: white;
        padding: 10px;
        margin: 15px;
        color: $White;
        border: 2px solid white;
        border-radius: 25px;
        height: 30px;
        box-shadow: 4px 4px 2px #444;
        background-color:#A80000;
      }
    </style>`
    }
    if(subject=="Consulta de reservas"){
      return `<h1>¡Buenas ${user.name}!</h1>
      <img src="https://pbs.twimg.com/profile_images/474300520186646528/j-f-A7kr.jpeg" alt="Logo">
      <h2>Consulta tus citas pulsando en el botón</h2>
      <a href="http://localhost:3000/citas/consulta/${user.id}" target="_blank">Consultar reservas</a>
      <style>
        body{
          padding: 25px 0;
          font-family: Arial;
          text-align: center;
          background-color: black;
			    color: white;
        }
        img{
          width:250px;
        }
        a{
          font-size: 1.8em;
          text-decoration: none;
          color: white;
          padding: 10px;
          margin: 15px;
          color: $White;
          border: 2px solid white;
          border-radius: 25px;
          height: 30px;
          box-shadow: 4px 4px 2px #444;
          background-color:#A80000;
        }
      </style>`
    }
  }
}

module.exports = EmailData