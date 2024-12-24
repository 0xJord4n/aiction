# aixion

![License](https://img.shields.io/badge/license-MIT-green)
![Maintenance](https://img.shields.io/badge/maintained-yes-brightgreen)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)
[![GitHub issues](https://img.shields.io/github/issues/0xjord4n/aixion)](https://github.com/0xjord4n/aixion/issues)
[![GitHub stars](https://img.shields.io/github/stars/0xjord4n/aixion)](https://github.com/0xjord4n/aixion/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/0xjord4n/aixion)](https://github.com/0xjord4n/aixion/network)

A powerful GitHub Action that enables seamless integration with various AI providers, allowing you to enhance your workflows with artificial intelligence capabilities. Supporting multiple providers including OpenAI, Anthropic, Groq, Mistral, and more.

## Features

- **Multi-Provider Support**:

  - OpenAI
  - Anthropic (Claude)
  - Groq
  - Mistral
  - Cohere
  - DeepInfra
  - Fireworks
  - Google
  - Together AI
  - XAI

- **Flexible Configuration**:

  - Custom API endpoints
  - Configurable model parameters
  - Adjustable response settings
  - Header customization

- **Easy Integration**:
  - Simple workflow setup
  - Comprehensive output handling
  - Support for both chat and completion modes

## Installation

1. Add the action to your workflow file (e.g., `.github/workflows/ai.yml`)
2. Configure your AI provider credentials as repository secrets
3. Customize the action parameters as needed

## Basic Usage

Create a workflow file in your repository:

```yaml
name: Basic AI Prompt
on:
  push:
    branches: [main]

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Generate AI Text
        uses: 0xjord4n/aixion@v1.1.0
        with:
          config: >
            {
              "provider": "openai",
              "provider_options": {
                "api_key": "${{ secrets.OPENAI_API_KEY }}"
              },
              "prompt": "Your prompt here",
              "model": "gpt-4"
            }
```

## Prompting Methods

aixion supports three different ways to interact with AI models:

### 1. Simple Prompt

Best for straightforward, single-turn interactions:

```yaml
config: >
  {
    "provider": "openai",
    "provider_options": {
      "api_key": "${{ secrets.OPENAI_API_KEY }}"
    },
    "prompt": "What is the capital of France?",
    "model": "gpt-4"
  }
```

### 2. System + Prompt

Useful when you need to set specific behavior or context:

```yaml
config: >
  {
    "provider": "openai",
    "provider_options": {
      "api_key": "${{ secrets.OPENAI_API_KEY }}"
    },
    "system": "You are a helpful programming assistant.",
    "prompt": "How do I write a hello world in Python?",
    "model": "gpt-4"
  }
```

### 3. Messages Array

Perfect for multi-turn conversations or complex interactions:

```yaml
config: >
  {
    "provider": "openai",
    "provider_options": {
      "api_key": "${{ secrets.OPENAI_API_KEY }}"
    },
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful programming assistant."
      },
      {
        "role": "user",
        "content": "What is a variable?"
      },
      {
        "role": "assistant",
        "content": "A variable is a container for storing data values."
      },
      {
        "role": "user",
        "content": "Can you show an example?"
      }
    ],
    "model": "gpt-4"
  }
```

**Note**: You should use only one of these methods per request. The precedence order is:

1. `messages` (if present, others are ignored)
2. `system` + `prompt` (if no messages)
3. `prompt` alone (if no messages or system)

## Configuration Options

### Provider Options

- `api_key`: Your provider's API key
- `base_url`: Custom API endpoint (optional)
- `headers`: Additional headers (optional)

### Model Parameters

- `temperature`: Control randomness (0.0-2.0)
- `max_tokens`: Maximum response length
- `top_p`: Nucleus sampling parameter
- `frequency_penalty`: Repetition control
- `presence_penalty`: Topic diversity control
- `stop`: Array of sequences where the API will stop generating further tokens

### Miscellaneous Options

- `save_path`: Path where the response will be saved (optional)

## Outputs

The action provides the following outputs:

- `text`: Generated response
- `usage`: Token usage statistics
- `finishReason`: Completion status

## Development

To contribute to this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/0xjord4n/aixion.git
   ```
2. Install dependencies
3. Make your changes
4. Submit a pull request

## Support

For issues, feature requests, or questions:

- Open an [issue](https://github.com/0xjord4n/aixion/issues)
- Submit a [pull request](https://github.com/0xjord4n/aixion/pulls)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
