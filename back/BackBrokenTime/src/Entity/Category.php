<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"fiction_list", "fiction_view", "category_list", "fiction_by_category"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"fiction_list", "fiction_view", "category_list", "fiction_by_category"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity=Fiction::class, mappedBy="category")
     * 
     * @Groups({"fiction_by_category"})
     */
    private $fictions;

    public function __construct()
    {
        $this->fictions = new ArrayCollection();
    }

    public function __toString() {
        return $this->id . " - " .$this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(?\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return Collection|Fiction[]
     */
    public function getFictions(): Collection
    {
        return $this->fictions;
    }

    public function addFiction(Fiction $fiction): self
    {
        if (!$this->fictions->contains($fiction)) {
            $this->fictions[] = $fiction;
            $fiction->addCategory($this);
        }

        return $this;
    }

    public function removeFiction(Fiction $fiction): self
    {
        if ($this->fictions->contains($fiction)) {
            $this->fictions->removeElement($fiction);
            $fiction->removeCategory($this);
        }

        return $this;
    }
}
