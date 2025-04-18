<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;

use function DragonCode\LaravelDeployOperations\operation;

return new class extends Migration {
    public function up(): void {}

    public function withOperation(): string
    {
        return operation('2025_03_31_234251_invoke');
    }
};
