<?php

namespace App\Models\Filters;

use Illuminate\Database\Eloquent\Builder;
use Lacodix\LaravelModelFilter\Filters\Filter;

class WhereInFilter extends Filter
{
    public function __construct(protected string $field) {}

    public function apply(Builder $query): Builder
    {
        return $query->whereIn($this->field, $this->values);
    }
}
