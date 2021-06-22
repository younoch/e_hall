import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      examLists: [
        {
          id: 'basicComputer',
          name: '-----',
          subject: 'Basic Computer',
          time: '123h 34min',
          batch: 'E5, E6'
        },
        {
          id: 'microprocesor',
          name: 'Titow',
          subject: 'Microprocesor',
          time: '127h 12min',
          batch: 'E5, E9'
        },
        {
          id: 'fiberOptics',
          name: 'Fisal',
          subject: 'Fiber Optics',
          time: '103h 07min',
          batch: 'E5, E7, E9'
        },
        {
          id: 'artificialInt',
          name: 'Nasrin',
          subject: 'Artificial Int',
          time: '123h 98min',
          batch: 'E10, E6'
        },
        {
          id: 'algorithom',
          name: 'Annandip',
          subject: 'Algorithom',
          time: '23h 04min',
          batch: 'R10, R11'
        }
      ],
      selectedExam: '',
      questions: [
        {
          subjectId: 'basicComputer',
          data: [
            {
              que: `Which of the following is the most powerful type of computer ?`,
              options: [
                `Super–micro`,
                `Super conductor`,
                `Super computer`,
                `Megaframe`
              ]
            },
            {
              que: `Web pages are written using ?`,
              options: [`FTP`, `HTTP`, `HTML`, `URL`]
            },
            {
              que: `IC stands for`,
              options: [
                `Internal Circuit`,
                `Internal Computer`,
                `Integrated Circuit`
              ]
            }
          ]
        },
        {
          subjectId: 'algorithom',
          data: [
            {
              que: `In order traversal of binary search tree will produce −`,
              options: [
                `Unsorted list`,
                `Reverse of input`,
                `Sorted list`,
                `None of the above`
              ]
            },
            {
              que: `Only top software programmers can write an algorithm.`,
              options: [`True`, `False`]
            },
            {
              que: `Dijkstra's algorithm - is a solution to the _________________ shortest path problem in graph theory.`,
              options: [`Multiple Source`, `Double Source`, `None of the above`]
            }
          ]
        }
      ],
      // Used in src\components\exam\exam.vue
      saveIndex: -1
    }
  },
  mutations: {
    storeSelectedExam (state,pay) {
      const sl = state.questions.find(
        que => que.subjectId === pay.value
      );
      state.saveIndex = Number(state.questions.indexOf(sl));
    }
  },

})
export default store
