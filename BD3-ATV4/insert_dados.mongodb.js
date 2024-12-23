const database = 'BD3-ATV4';
const collection = 'mensagens';

use(database);

db[collection].insertMany(
    [
        {
            "contato": "Camila",
            "data_hora": "2024-11-17T08:00:00Z",
            "msg": "Pedro, você já pensou em como pequenas ações podem impactar o meio ambiente?"
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T08:02:00Z",
            "msg": "Sim, Camila. Reduzir o consumo de plástico e economizar água são passos simples que, se adotados por muitos, fazem uma grande diferença."
        },
        {
            "contato": "Camila",
            "data_hora": "2024-11-17T08:04:00Z",
            "msg": "Concordo, mas às vezes parece que nossas ações individuais são insignificantes. O que você acha?"
        },
        {
            "contato": "Pedro",
            "data_hora": "2024-11-17T08:06:00Z",
            "msg": "Cada pequena ação conta, Camila. Quando mostramos que nos importamos, inspiramos outras pessoas a fazerem o mesmo, criando um impacto coletivo."
        },
        {
            "contato": "Ana",
            "data_hora": "2024-11-17T10:15:00Z",
            "msg": "João, como você lida com a procrastinação quando tem muitas tarefas importantes?"
        },
        {
            "contato": "João",
            "data_hora": "2024-11-17T10:17:00Z",
            "msg": "Ana, eu tento priorizar as tarefas maiores pela manhã, quando estou mais produtivo, e divido o trabalho em partes menores para evitar sobrecarga."
        },
        {
            "contato": "Ana",
            "data_hora": "2024-11-17T10:19:00Z",
            "msg": "Faz sentido. Talvez eu deva criar uma lista de prioridades para organizar melhor o meu tempo."
        },
        {
            "contato": "João",
            "data_hora": "2024-11-17T10:21:00Z",
            "msg": "Boa ideia, Ana! Além disso, eliminar distrações, como o celular, pode ajudar bastante a manter o foco."
        },
        {
            "contato": "Lucas",
            "data_hora": "2024-11-17T15:00:00Z",
            "msg": "Carla, você acredita que viajar pode mudar nossa perspectiva sobre a vida?"
        },
        {
            "contato": "Carla",
            "data_hora": "2024-11-17T15:02:00Z",
            "msg": "Com certeza, Lucas. Conhecer novas culturas e formas de viver nos ajuda a valorizar mais o que temos e nos torna mais empáticos."
        }
    ]
);


