export default function ({ store, redirect }) {
  if (store.state.user._id) {
    redirect('/')
  }
}