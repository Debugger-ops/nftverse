'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'
import styles from './CreateNFT.module.css'

interface NFTFormData {
  name: string
  description: string
  price: string
  category: string
  royalties: string
  collection: string
  properties: { trait_type: string; value: string }[]
}

interface FormErrors {
  name?: string
  description?: string
  price?: string
  image?: string
  category?: string
}

const CreateNFT: React.FC = () => {
  const [formData, setFormData] = useState<NFTFormData>({
    name: '',
    description: '',
    price: '',
    category: '',
    royalties: '10',
    collection: '',
    properties: []
  })

  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [propertyInput, setPropertyInput] = useState({ trait_type: '', value: '' })
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    'Art',
    'Photography',
    'Music',
    'Video',
    'Gaming',
    'Sports',
    'Collectibles',
    'Virtual Worlds'
  ]

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Please select a valid image file' }))
        return
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image size must be less than 10MB' }))
        return
      }

      setImageFile(file)
      setErrors(prev => ({ ...prev, image: undefined }))
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addProperty = () => {
    if (propertyInput.trait_type && propertyInput.value) {
      setFormData(prev => ({
        ...prev,
        properties: [...prev.properties, { ...propertyInput }]
      }))
      setPropertyInput({ trait_type: '', value: '' })
    }
  }

  const removeProperty = (index: number) => {
    setFormData(prev => ({
      ...prev,
      properties: prev.properties.filter((_, i) => i !== index)
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required'
    }

    if (!formData.category) {
      newErrors.category = 'Category is required'
    }

    if (!imageFile) {
      newErrors.image = 'Image is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically:
      // 1. Upload image to IPFS
      // 2. Create metadata JSON
      // 3. Mint NFT on blockchain
      // 4. Save to database
      
      alert('NFT created successfully!')
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        royalties: '10',
        collection: '',
        properties: []
      })
      setImageFile(null)
      setImagePreview('')
      
    } catch (error) {
      alert('Error creating NFT. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create New NFT</h1>
        <p className={styles.subtitle}>
          Upload your digital artwork and mint it as an NFT
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          {/* Image Upload Section */}
          <div className={styles.imageSection}>
            <div className={styles.uploadArea} onClick={() => fileInputRef.current?.click()}>
              {imagePreview ? (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} alt="Preview" />
                  <div className={styles.imageOverlay}>
                    <span>Click to change image</span>
                  </div>
                </div>
              ) : (
                <div className={styles.uploadPlaceholder}>
                  <div className={styles.uploadIcon}>📁</div>
                  <p>Click to upload image</p>
                  <span>PNG, JPG, GIF up to 10MB</span>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.hiddenInput}
            />
            {errors.image && <span className={styles.error}>{errors.image}</span>}
          </div>

          {/* Form Fields */}
          <div className={styles.fieldsSection}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Enter NFT name"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                placeholder="Describe your NFT"
                rows={4}
              />
              {errors.description && <span className={styles.error}>{errors.description}</span>}
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="price" className={styles.label}>Price (ETH) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.price ? styles.inputError : ''}`}
                  placeholder="0.00"
                  step="0.001"
                  min="0"
                />
                {errors.price && <span className={styles.error}>{errors.price}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`${styles.select} ${errors.category ? styles.inputError : ''}`}
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <span className={styles.error}>{errors.category}</span>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="royalties" className={styles.label}>Royalties (%)</label>
                <input
                  type="number"
                  id="royalties"
                  name="royalties"
                  value={formData.royalties}
                  onChange={handleInputChange}
                  className={styles.input}
                  min="0"
                  max="50"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="collection" className={styles.label}>Collection</label>
                <input
                  type="text"
                  id="collection"
                  name="collection"
                  value={formData.collection}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Optional collection name"
                />
              </div>
            </div>

            {/* Properties Section */}
            <div className={styles.propertiesSection}>
              <label className={styles.label}>Properties</label>
              <div className={styles.propertyInput}>
                <input
                  type="text"
                  value={propertyInput.trait_type}
                  onChange={(e) => setPropertyInput(prev => ({ ...prev, trait_type: e.target.value }))}
                  placeholder="Trait type"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={propertyInput.value}
                  onChange={(e) => setPropertyInput(prev => ({ ...prev, value: e.target.value }))}
                  placeholder="Value"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={addProperty}
                  className={styles.addButton}
                  disabled={!propertyInput.trait_type || !propertyInput.value}
                >
                  Add
                </button>
              </div>
              
              {formData.properties.length > 0 && (
                <div className={styles.propertiesList}>
                  {formData.properties.map((prop, index) => (
                    <div key={index} className={styles.propertyTag}>
                      <span>{prop.trait_type}: {prop.value}</span>
                      <button
                        type="button"
                        onClick={() => removeProperty(index)}
                        className={styles.removeButton}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span>
                  Creating NFT...
                </>
              ) : (
                'Create NFT'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateNFT