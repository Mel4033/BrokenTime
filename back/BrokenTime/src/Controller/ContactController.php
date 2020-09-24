<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact_send")
     */
    public function send()
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
}
