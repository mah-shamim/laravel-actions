<?php

declare(strict_types=1);

use DragonCode\LaravelDeployOperations\Operation;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

return new class extends Operation {
    public function __invoke(): void
    {
        $this->table()->insert([
            'value' => Str::random(4),
        ]);
    }

    protected function table(): Builder
    {
        return DB::table('test');
    }

    public function needAsync(): bool
    {
        return true;
    }
};
