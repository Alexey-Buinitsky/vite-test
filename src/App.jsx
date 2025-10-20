import { AppPagination, Header, Footer, AppTable } from "./components/shared"

function App() {

	return (
		<>
			<Header />
			<main>
				<AppTable />
				<AppPagination />
			</main>
			<Footer />
		</>
	)
}

export default App
