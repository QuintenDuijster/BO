using UnityEngine;
using UnityEngine.AI;

public class Shooter : MonoBehaviour
{ 
    private int minDistance = 10;
    private int maxDistance = 20;
    private float speed = 2f;

    private int minAttackCooldown = 2;
    private int maxAttackCooldown = 4;
    private float AttackCooldown = 0;

    private int bulletAmount = 10;
    private bool canShoot = true;

    private int hitDistance = 5;

    [SerializeField] 
    private GameObject bullet;
    private GameObject target;
    private Vector3 targetPosition;
    private NavMeshAgent agent;

    private void Start()
    {
        target = GameObject.FindGameObjectWithTag("Player");
        agent = GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        #region Movement
        var step = speed * Time.deltaTime;

        targetPosition = new Vector3(target.transform.position.x, 1f, target.transform.position.z);

        if (Vector3.Distance(transform.position, target.transform.position) > maxDistance)
        {
            agent.isStopped = false;
            agent.SetDestination(targetPosition);
        }
        else if (Vector3.Distance(transform.position, target.transform.position) < minDistance)
        {
            agent.isStopped = true; 
            transform.position = Vector3.MoveTowards(transform.position, target.transform.position, -step);
        }
        transform.LookAt(targetPosition);

        #endregion

        #region Attack
        if (bulletAmount == 0)
        {
            maxDistance = 0;
            minDistance = 0;
            speed = 4;
            canShoot = false;
        }


        if (AttackCooldown <= 0)
        {
            if (canShoot && !(Vector3.Distance(transform.position, targetPosition) < hitDistance))
            {
                bullet.transform.position = transform.position;
                bullet.transform.rotation = transform.rotation;
                Instantiate(bullet);
                bulletAmount--;
                AttackCooldown = Random.Range(minAttackCooldown, maxAttackCooldown);
            }
            else if (Vector3.Distance(transform.position, targetPosition) < hitDistance)
            {
                AttackCooldown = Random.Range(minAttackCooldown, maxAttackCooldown);
            }
        }
        AttackCooldown = AttackCooldown - Time.deltaTime;
        #endregion
    }
}


