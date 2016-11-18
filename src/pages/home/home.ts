import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  talks = [{
    "id": 83004001,
    "start": "10:00",
    "end": "10:45",
    "contents": {
      "type": "TALK",
      "id": 5701657165824000,
      "title": "Programación defensiva y sistemas resilientes en el mundo real",
      "description": "¡Por fin has puesto en producción tu proyecto! Ha costado ¿verdad? Pero bueno, ya está siendo usado por usuarios reales, todas las funcionalidades completas e incluso montones de tests que están de color verde impoluto. Pues ya has terminado, ¿no? Me temo que no amigo. La interacción de los usuarios y la interacción de tu aplicación con otros sistemas te va a enseñar que hay una cantidad importante de comportamientos del sistema que no esperabas. Es el momento en el cuál empiezan las llamadas de emergencia. Esto te enseña que tienes que estar bien preparado para sentirte seguro al sacar tu aplicación al Mundo Real(TM). La Programación Defensiva y la Resiliencia son dos conceptos que nos van a ayudar a hacer más robustas nuestros sistemas y nos van a preparar para ser resistentes a fallos y ser proactivos en su detección con la monitorización de todo. En esta charla veremos un ejemplo práctico basado en los sistemas de .Tuenti, que problemas hemos tenido y que tipo de soluciones hemos i",
      "creationDate": 1465154622015,
      "authors": [
        {
          "id": 656030,
          "uuid": "kinisoftware1",
          "name": "Joaquin Engelmo Moriche",
          "avatar": "https://storage.googleapis.com/k-avatars/656030-77ab1b00",
          "description": "Vivo en la salvaje capital pero me he criado entre bellotas. Programo libremente en Tuenti, no paro de organizar cosas en theEvnt y soy un friki gastronómico, tv shows lover y rojiblanco de pura cepa. No soy especialmente brillante pero lo suficientemente resolutivo. Hablo Java de forma nativa, me defiendo en PHP y chapurreo otros lenguajes. Visto de backend aunque a veces me pongo la gorra de frontend, bash, 'saca curro a paladas', whatever. Se me puede ver felizmente usando la Thermomix en mis ratos libres.",
          "feedback": {
            "ratingAverage": 4.04,
            "entriesCount": 137
          },
          "twitterAccount": "kinisoftware"
        }
      ],
      "state": "ASSIGNED",
      "tags": {
        "Type of Proposal": [
          "Talk"
        ],
        "Language of the talk/workshop": [
          "Spanish"
        ],
        "Language": [
          "Other"
        ],
        "Technology": [
          "Other"
        ],
        "Level": [
          "Intermediate"
        ]
      },
      "totalVotes": 16,
      "totalLikes": 144,
      "feedback": {
        "ratingAverage": 0.0,
        "entriesCount": 0
      }
    },
    "userId": 309007,
    "trackId": 5169458372935680
  },
    {
      "id": 83014001,
      "start": "11:00",
      "end": "11:45",
      "contents": {
        "type": "TALK",
        "id": 5689594649509888,
        "title": "Lessons learnt trying to deploy Docker in production",
        "description": "Poco a poco Docker va introduciéndose en nuestro flujo de trabajo, y nos preguntamos cual es la mejor forma de llevarlo a producción.\n¿Cómo podemos cambiar nuestro sistema de despliegue actual para utilizar Docker sin que sea un drama? ¿Qué pasos seguir?\n\nVeremos cómo poder utilizar Docker en producción sin liarnos a aprender un stack completamente nuevo como Kubernetes o Mesos, poniendo nuestros containers en el mismo stack que ya teníamos.",
        "creationDate": 1466797747769,
        "authors": [
          {
            "id": 57244004,
            "uuid": "fiunchinho",
            "name": "Jose Armesto",
            "avatar": "https://storage.googleapis.com/k-avatars/57244004-954993ed",
            "description": "Senior Software Developer en Schibsted Spain (infojobs, milanuncios, fotocasa, vibbo...), trabajó durante casi 5 años en Softonic.com, donde ocupaba el puesto de Software Architect. Lleva una vida paralela entre el mundo del desarrollo del software y de la enseñanza, y actualmente se encuentra en una cruzada personal por llevar el espíritu del Software Craftmanship al mundo DevOps.",
            "feedback": {
              "ratingAverage": 0.0,
              "entriesCount": 0
            },
            "twitterAccount": "fiunchinho"
          }
        ],
        "state": "ASSIGNED",
        "tags": {
          "Type of Proposal": [
            "Talk"
          ],
          "Language of the talk/workshop": [
            "Spanish"
          ],
          "Language": [
            "Other"
          ],
          "Technology": [
            "DevOps"
          ],
          "Level": [
            "Intermediate"
          ]
        },
        "totalVotes": 20,
        "totalLikes": 91,
        "feedback": {
          "ratingAverage": 0.0,
          "entriesCount": 0
        }
      },
      "userId": 309007,
      "trackId": 5169458372935680
    }]

}
