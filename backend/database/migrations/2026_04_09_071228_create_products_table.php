<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        // Relasi sungguhan ke tabel categories
        $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
        
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('sku')->unique()->nullable(); // Stock Keeping Unit (Kode Unik Produk)
        $table->text('description')->nullable();
        
        // Harga
        $table->decimal('price', 15, 2)->default(0);
        $table->decimal('sale_price', 15, 2)->nullable(); // Harga diskon
        
        $table->integer('stock')->default(0);
        $table->string('image')->nullable();
        $table->boolean('is_active')->default(true); // Memudahkan sembunyikan produk
        
        $table->timestamps(); // Shortcut untuk created_at & updated_at
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
