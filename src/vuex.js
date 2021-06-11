import {createStore} from 'vuex';
const store = createStore({
    state() {
        return {
            examLists: [
                {
                  id: "basicComputer",
                  name: "-----",
                  subject: "Basic Computer",
                  time: "123h 34min",   
                  batch: "E5, E6",
                },
                {
                  id: "microprocesor",
                  name: "Titow",
                  subject: "Microprocesor",
                  time: "127h 12min",
                  batch: "E5, E9",
                },
                {
                  id: "fiberOptics",
                  name: "Fisal",
                  subject: "Fiber Optics",
                  time: "103h 07min",
                  batch: "E5, E7, E9",
                },
                {
                  id: "artificialInt",
                  name: "Nasrin",
                  subject: "Artificial Int",
                  time: "123h 98min",
                  batch: "E10, E6",
                },
                {
                  id: "algorithom",
                  name: "Annandip",
                  subject: "Algorithom",
                  time: "23h 04min",
                  batch: "R10, R11",
                },
              ],
              selectedExam: '',
              questions: [
                {
                 basicComputer: [
                  {
                    sl:1,
                    que: `Which of the following is the most powerful type of computer ?`,
                    options: [
                      {
                        sl: 'A.',
                        op:`Super–micro`
                      },
                      {
                        sl: 'B.',
                        op:`Super conductor`
                      },{
                        sl: 'C.',
                        op:`Super computer`,
                      },
                      {
                        sl: 'D.',
                        op:`Megaframe`
                      },
                    ]
                  },
                  {
                    sl:2,
                    que: `Web pages are written using ?`,
                    options: [
                      `A. FTP`,
                      `B. HTTP`,
                      `C. HTML`,
                      `D. URL`
                    ]
                  }
                  
                  ]
                }
              ]
        }
    },
    mutations: {
      storeSelectedExam(state,exam) {
        state.selectedExam = exam.value;
      }
    }
});
export default store;