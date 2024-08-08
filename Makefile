.PHONY: install-act

ACT_BINARY := /usr/local/bin/act

install-act:
	@if ! command -v act &> /dev/null; then \
		echo "act is not installed. Installing act..."; \
		sudo apt-get update; \
		sudo apt-get install -y curl jq unzip; \
		curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash; \
		sudo mv bin/act $(ACT_BINARY); \
		rm -rf bin; \
		echo "act has been installed successfully."; \
	else \
		echo "act is already installed. Version: $$(act --version)"; \
	fi

.PHONY: install-act
lint: install-act
	act --job check-links
	act --job markdown-linter