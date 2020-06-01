import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
  <p>
    Elit quaerat fugit harum laborum laboriosam Dicta asperiores minus odit neque fugit Ipsa quasi tempora voluptates necessitatibus pariatur! Aut voluptate repellat recusandae provident soluta. Laborum quia vel ut nam natus.
  </p>
  <p>
    Consectetur provident provident adipisci vero assumenda. Aliquid at nobis quos voluptas lorem Minus soluta quaerat consectetur maxime repellat ratione? Quasi possimus in autem iure iste ut praesentium beatae Quas maxime.
  </p>
  <p>
    Lorem asperiores lorem dolorum quod blanditiis? Mollitia officiis doloremque rerum id voluptatem incidunt Vitae aperiam adipisci veniam placeat ipsa? Dolorem consequatur suscipit neque excepturi officiis. Dicta unde assumenda sed libero.
  </p>
  <p>
    Consectetur iusto architecto eos rerum vitae Perspiciatis ipsum odit doloribus aliquid repellat. Fuga fugiat architecto reiciendis minus obcaecati alias Autem ut voluptas corporis tempore consequuntur tenetur. Accusamus harum accusamus odit!
  </p>
  <p>
    Ipsum culpa nesciunt quam accusantium tempore. Repellat fuga distinctio vero quam ullam Fugit at accusantium iste voluptatum consectetur adipisci, ipsam eligendi Nisi accusamus magni molestias facilis maxime nemo iste quo
  </p>
  <p>
    Sit sunt expedita adipisicing dicta labore illum enim nobis eos Suscipit eligendi possimus omnis commodi in? Obcaecati suscipit ad sit praesentium inventore, quisquam Minus dolorum perspiciatis ullam quaerat tempore magni
  </p>
  <p>
    Amet ducimus numquam et autem quia? Itaque quis eos error quia corrupti Temporibus iusto est magnam animi impedit sequi vero! Voluptas dignissimos dignissimos molestias commodi nobis. Vero mollitia consequuntur quo
  </p>
  <p>
    Sit eveniet ad quo quisquam sed delectus Quia impedit cum rem nisi libero Aut odio consectetur excepturi in debitis! Eaque dolor voluptas vel sapiente reprehenderit Iure quod aperiam vel veritatis.
  </p>
  <p>
    Amet harum tenetur sequi qui recusandae Aperiam illum amet amet enim error deleniti Esse similique corrupti quasi iste culpa esse Vero excepturi odio ut minima hic vitae Laboriosam necessitatibus ipsam.
  </p>
  <p>
    Elit deserunt suscipit at doloribus neque? Est ratione ullam inventore neque adipisci Harum odit expedita ad accusantium corporis natus. Ipsum iure tempore deserunt blanditiis magni Quisquam maiores optio odio sit.
  </p>
  <p>
    Lorem laudantium enim enim itaque nemo, repellendus dolorum Voluptates doloribus facilis nisi ratione corrupti corporis. Hic odio dolores sit eius ut quo? Libero doloremque nulla dolor harum a Numquam debitis.
  </p>
  <p>
    Sit numquam pariatur quam vero soluta maxime. Minus accusantium consectetur molestiae est totam Nam tenetur autem itaque sint deleniti vel. Atque nesciunt amet optio labore cum Corporis quo dolorum nam.
  </p>
  <p>
    Elit incidunt vel a sunt cupiditate odio deserunt? Odio quam neque sed molestias facere? Error adipisci ducimus sit expedita iste Sit voluptas excepturi commodi molestiae ut. Illo architecto modi animi
  </p>
  <p>
    Ipsum tenetur vitae tenetur placeat mollitia Recusandae quod asperiores nam facere consectetur Possimus ducimus fugit soluta inventore facilis Quo vel veritatis voluptatibus officiis excepturi consectetur enim Inventore ipsa reprehenderit in
  </p>
  <p>
    Adipisicing eius nihil sequi exercitationem harum rerum? Fugit nesciunt quod veniam voluptatibus vel excepturi molestias? Quae velit similique alias saepe reprehenderit? Dolorum temporibus totam laudantium suscipit beatae? Vero quisquam molestias.
  </p>
  <p>
    Sit veritatis voluptatibus in tempore repellendus. Adipisci ratione quam debitis optio provident Tenetur autem mollitia iste doloremque fuga? Incidunt velit quos dolores ipsa aliquam illo? Eos incidunt minus quia rem.
  </p>
  <p>
    Ipsum provident nulla esse obcaecati vero vel. Reiciendis nihil culpa accusantium laudantium velit veniam Minima repellendus repudiandae voluptatum harum eligendi! Reiciendis debitis nemo provident totam optio. Sequi rerum molestiae distinctio
  </p>
  <p>
    Lorem aliquam aut quisquam soluta ea iure Asperiores ad ut sunt dolores assumenda Omnis aperiam sed autem perferendis dignissimos. Aspernatur facilis id deserunt repellendus molestiae Ad dignissimos unde nisi incidunt.
  </p>
  <p>
    Elit tenetur accusantium sapiente nostrum maiores in Temporibus consequuntur laborum laudantium ad quas Rerum dolor ullam officiis est excepturi. Libero fugiat est saepe perferendis neque. Voluptatem nulla doloribus velit accusantium.
  </p>
  <p>
    Lorem voluptas exercitationem odit iste tenetur nesciunt Similique dolorem dicta eligendi esse tenetur nulla, minima Esse expedita amet assumenda quas labore repellendus. Quos doloribus omnis sunt deserunt repellendus Aut delectus?
  </p>
`;

const body = document.querySelector('body');
body.appendChild(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// funcion que haga el calculo
const calcularProcejtajeScroll = event => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return scrollTop / (scrollHeight - clientHeight) * 100;
}

// streams
const scroll$ = fromEvent<Event>(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map(calcularProcejtajeScroll),
  tap(console.log)
);

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
});

