<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        $experiences = [
            [
                'id' => 'cak',
                'companyName' => 'CAK Groep',
                'role' => 'Backend Developer',
                'duration' => '2024-Huidig',
                'logo' => 'images/work-experience/cak-small.jpg',
                'link' => '',
            ],
            [
                'id' => 'tbc',
                'companyName' => 'Team Bicep',
                'role' => 'Eigenaar / Developer',
                'duration' => '2019-Huidig',
                'logo' => 'images/work-experience/team-bicep-small.png',
                'link' => '',
            ],
            [
                'id' => 'eqp',
                'companyName' => 'Equippo AG',
                'role' => 'Full Stack Developer',
                'duration' => '2020-2024',
                'logo' => 'images/work-experience/equippo-small.jpg',
                'link' => 'tes',
            ],
        ];

        return $this->render('index/index.html.twig', [
            'experiences' => $experiences
        ]);
    }
}
