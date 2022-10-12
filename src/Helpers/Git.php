<?php

declare(strict_types=1);

namespace DragonCode\LaravelActions\Helpers;

use DragonCode\Support\Facades\Filesystem\Directory;

class Git
{
    public function __construct(
        protected Config $config
    ) {
    }

    public function currentBranch(?string $path = null): ?string
    {
        if ($this->hasGitDirectory($path)) {
            return $this->exec('rev-parse --abbrev-ref HEAD', $this->resolvePath($path));
        }

        return null;
    }

    protected function exec(string $command, ?string $path = null): ?string
    {
        return exec(sprintf('git --git-dir "%s" %s', $path, $command));
    }

    protected function hasGitDirectory(?string $path = null): bool
    {
        if ($path = rtrim($this->resolvePath($path), '/\\')) {
            return Directory::exists($path . DIRECTORY_SEPARATOR . '.git');
        }

        return false;
    }

    protected function resolvePath(?string $path = null): string
    {
        return realpath($path ?: $this->config->gitPath());
    }
}