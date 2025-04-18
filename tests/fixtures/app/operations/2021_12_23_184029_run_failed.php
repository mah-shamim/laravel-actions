<?php

declare(strict_types=1);

use DragonCode\LaravelDeployOperations\Operation;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

return new class extends Operation {
    public function up(): void {}

    public function down(): void {}

    public function failed(): void
    {
        $this->table()->insert([
            'value' => Str::random(4),
        ]);
    }

    protected function table(): Builder
    {
        return DB::table('success');
    }
};
