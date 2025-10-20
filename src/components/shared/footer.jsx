export const Footer = () => {

	const links = [
		{ label: "Информация", href: "/" },
		{ label: "Пользователи", href: "/" },
		{ label: "Реклама", href: "/" },
		{ label: "Условия", href: "/" },
		{ label: "Политика Конфиденциальности", href: "/" },
		{ label: "Поддержка", href: "/" },
		{ label: "Клиенты", href: "/" },
		{ label: "Настройки Куки", href: "/" },
		{ label: "Главная", href: "/" }
	]

	return (
		<footer className="footer">

			<nav className="footer__nav">
				<ul className="footer__list">
					{links.map((link, index) => (
						<li key={index} className="footer__item">
							<a href={link.href} className="footer__link">
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className="footer__copyright">
				<span>@test</span>
			</div>

		</footer>
	)
}