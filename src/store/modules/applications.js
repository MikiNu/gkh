import firebase from 'firebase'

// инициализируем состояние
const state = {
  application: '',
  statusApplications: ''
}

const getters = {
  applications: state => state.application,
  statusApplications: state => state.statusApplications
}

const actions = {
  GET_APPLICATION ({ state, commit, rootState }){
    return new Promise((resolve, reject) => {
      if (state.statusApplications === ''){
        commit('SET_STATUS_APPLICATIONS', 'loading')
      }
      firebase
        .firestore()
        .collection('applications').get()
        .then((snapshot) => {
            const mass = []
            snapshot.forEach((doc) => {
              let application = Object.assign({}, doc.data())
              application.doc = doc.id
              mass.push(application)
            })
            let listApp = mass.filter(function (application) {
              if (rootState.auth.user.employee) {
                return application
              } else {
                if (rootState.auth.uid === application.whoAdd) {
                  return application
                }
              }
            })
            if (listApp) {
              commit('GET_APPLICATION', listApp)
            }
            if (state.statusApplications !== 'success'){
              commit('SET_STATUS_APPLICATIONS', 'success')
            }
            resolve(snapshot)
          }, (response) => {
            commit('SET_STATUS_APPLICATIONS', 'error')
            reject(response)
          }
        )
    })
  },
  UPDATE_APPLICATION ({ dispatch }, data) {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('applications').doc(data.doc)
        .update(data.change)
        .then((ref) => {
            dispatch('GET_APPLICATION')
            resolve(ref)
          }, (response) => {
            reject(response)
          }
        )
    })
  },
  CREATE_APPLICATION ({ dispatch }, data) {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('applications').add(data)
        .then((ref) => {
            dispatch('GET_APPLICATION')
            resolve(ref)
          }, (response) => {
            reject(response)
          }
        )
    })
  },
}

const mutations = {
  GET_APPLICATION (state, data) {
    state.application = data
  },
  CLEAR_APPLICATIONS (state) {
    state.application = ''
  },
  SET_STATUS_APPLICATIONS (state, status) {
    state.statusApplications = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
