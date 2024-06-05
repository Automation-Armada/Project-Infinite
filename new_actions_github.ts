import * as core from '@actions/core';
import * as github from '@actions/github';
import { exec } from 'child_process';

async function captureErrorsAndInfo() {
  try {
    // Capturar errores del pipeline
    let errors: string = '';

    exec('tu_comando_de_pipelines', (error, stdout, stderr) => {
      if (error || stderr) {
        errors = error ? error.message : stderr;
      }
    });

    // Capturar nombre del commit
    const commitName = github.context.payload.head_commit?.message;

    // Obtener el enlace del repositorio
    const repositoryLink = github.context.payload.repository?.html_url;

    // Formatear la información capturada
    const errorMessage = errors ? `Errores: ${errors}` : 'No se encontraron errores.';
    const commitMessage = commitName ? `Nombre del commit: ${commitName}` : 'No se pudo obtener el nombre del commit.';
    const repoLink = repositoryLink ? `Enlace del repositorio: ${repositoryLink}` : 'No se pudo obtener el enlace del repositorio.';

    // Imprimir la información capturada
    console.log(errorMessage);
    console.log(commitMessage);
    console.log(repoLink);

    // Puedes hacer lo que necesites con esta información, como enviarla a Discord
  } catch (error) {
    core.setFailed(`Ocurrió un error: ${error.message}`);
  }
}

captureErrorsAndInfo();
